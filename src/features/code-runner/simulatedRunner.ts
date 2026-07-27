import type { LanguageId } from '../../types/course';

function numericList(source: string): number[] {
  return source.split(',').map((value) => Number(value.trim())).filter(Number.isFinite);
}

function javaHeuristics(code: string): string | null {
  const stringVars = Object.fromEntries(Array.from(code.matchAll(/String\s+(\w+)\s*=\s*"([^"]*)"\s*;/g), (m) => [m[1], m[2]]));
  const intVars = Object.fromEntries(Array.from(code.matchAll(/int\s+(\w+)\s*=\s*(-?\d+)\s*;/g), (m) => [m[1], Number(m[2])]));

  const ifMatch = code.match(/if\s*\(\s*(\w+)\s*(>=|<=|>|<|==|!=)\s*(-?\d+)\s*\)\s*\{?\s*System\.out\.println\("([^"]*)"\);?\s*\}?\s*else\s*\{?\s*System\.out\.println\("([^"]*)"\)/s);
  if (ifMatch) {
    const [, name, operator, rawRight, positive, negative] = ifMatch;
    const left = Number(intVars[name]);
    const right = Number(rawRight);
    const passed = operator === '>=' ? left >= right : operator === '<=' ? left <= right : operator === '>' ? left > right : operator === '<' ? left < right : operator === '==' ? left === right : left !== right;
    return passed ? positive : negative;
  }

  const parseInt = code.match(/Integer\.parseInt\("([^"]*)"\)/);
  if (parseInt && /try\s*\{/.test(code)) {
    const valid = Number.isFinite(Number(parseInt[1]));
    const outputs = Array.from(code.matchAll(/System\.out\.println\("([^"]*)"\)/g), (m) => m[1]);
    return valid ? outputs[0] ?? null : outputs.at(-1) ?? null;
  }

  const beacon = code.match(/new\s+Beacon\("([^"]+)"\)\.ping\(\)/);
  if (beacon && /return\s+(?:name|this\.name)\s*\+\s*"([^"]+)"/.test(code)) {
    const suffix = code.match(/return\s+(?:name|this\.name)\s*\+\s*"([^"]+)"/)?.[1] ?? '';
    return `${beacon[1]}${suffix}`;
  }

  const calibrate = code.match(/calibrate\((-?\d+)\s*,\s*(-?\d+)\)/);
  if (calibrate && /return\s+value\s*\+\s*boost/.test(code)) return String(Number(calibrate[1]) + Number(calibrate[2]));

  const array = code.match(/int\[\]\s+\w+\s*=\s*\{([^}]*)\}/);
  if (array && /sum\s*\+=/.test(code)) return String(numericList(array[1]).reduce((sum, value) => sum + value, 0));

  if (/ArrayList<.*>/.test(code) && /\.size\(\)/.test(code)) return String((code.match(/\.add\(/g) ?? []).length);

  const mapPut = code.match(/\.put\("([^"]+)"\s*,\s*(-?\d+)\)/);
  const mapGet = code.match(/\.get\("([^"]+)"\)/);
  if (mapPut && mapGet && mapPut[1] === mapGet[1]) return mapPut[2];

  const listValues = code.match(/List\.of\(([^)]*)\)/);
  const filter = code.match(/filter\(\w+\s*->\s*\w+\s*>\s*(-?\d+)\)/);
  if (listValues && filter && /\.sum\(\)/.test(code)) {
    const threshold = Number(filter[1]);
    return String(numericList(listValues[1]).filter((value) => value > threshold).reduce((sum, value) => sum + value, 0));
  }

  const coordinate = code.match(/new\s+Coordinate\((-?\d+)\s*,\s*(-?\d+)\)/);
  if (coordinate && /point\.x\(\)\s*\+\s*point\.y\(\)/.test(code)) return String(Number(coordinate[1]) + Number(coordinate[2]));

  const polymorphicClass = code.match(/new\s+(\w+)\(\)/)?.[1];
  if (polymorphicClass) {
    const classBody = code.match(new RegExp(`class\\s+${polymorphicClass}[^\\{]*\\{([\\s\\S]*?)\\}`))?.[1];
    const returned = classBody?.match(/return\s+"([^"]+)"/)?.[1];
    if (returned) return returned;
  }

  const directMethodResult = Array.from(code.matchAll(/return\s+"([^"]+)"\s*;/g), (m) => m[1]);
  if (directMethodResult.length === 1 && /System\.out\.println\(.*\.\w+\(\)\)/.test(code)) return directMethodResult[0];

  const output: string[] = [];
  for (const match of code.matchAll(/System\.out\.println\(([^;]+)\)\s*;/g)) {
    const expression = match[1].trim();
    const literal = expression.match(/^"([^"]*)"$/)?.[1];
    if (literal !== undefined) { output.push(literal); continue; }
    if (expression in stringVars) { output.push(String(stringVars[expression])); continue; }
    if (expression in intVars) { output.push(String(intVars[expression])); continue; }
    if (/^-?\d+(?:\s*[+*/-]\s*-?\d+)*$/.test(expression)) {
      try { output.push(String(Function(`return (${expression})`)())); continue; } catch { /* noop */ }
    }
  }
  return output.length ? output.join('\n') : null;
}

function cppHeuristics(code: string): string | null {
  const stringVars = Object.fromEntries(Array.from(code.matchAll(/(?:const\s+)?string\s+(\w+)\s*=\s*"([^"]*)"\s*;/g), (m) => [m[1], m[2]]));
  const intVars = Object.fromEntries(Array.from(code.matchAll(/int\s+(\w+)\s*=\s*(-?\d+)\s*;/g), (m) => [m[1], Number(m[2])]));

  const ternary = code.match(/cout\s*<<\s*\(\s*(\w+)\s*(>=|<=|>|<|==|!=)\s*(-?\d+)\s*\?\s*"([^"]*)"\s*:\s*"([^"]*)"\s*\)/);
  if (ternary) {
    const [, name, operator, rawRight, positive, negative] = ternary;
    const left = Number(intVars[name]);
    const right = Number(rawRight);
    const passed = operator === '>=' ? left >= right : operator === '<=' ? left <= right : operator === '>' ? left > right : operator === '<' ? left < right : operator === '==' ? left === right : left !== right;
    return passed ? positive : negative;
  }

  const calibrate = code.match(/calibrate\((-?\d+)\s*,\s*(-?\d+)\)/);
  if (calibrate && /return\s+value\s*\+\s*boost/.test(code)) return String(Number(calibrate[1]) + Number(calibrate[2]));

  const staticArray = code.match(/int\s+\w+\[\]\s*=\s*\{([^}]*)\}/);
  if (staticArray && /sum\s*\+=/.test(code)) return String(numericList(staticArray[1]).reduce((sum, value) => sum + value, 0));

  const vector = code.match(/vector<int>\s+(\w+)\s*=\s*\{([^}]*)\}/);
  if (vector) {
    const values = numericList(vector[2]);
    const pushValues = Array.from(code.matchAll(new RegExp(`${vector[1]}\\.push_back\\((-?\\d+)\\)`, 'g')), (m) => Number(m[1]));
    values.push(...pushValues);
    if (new RegExp(`${vector[1]}\\.size\\(\\)`).test(code)) return String(values.length);
    if (/sort\s*\(/.test(code) && new RegExp(`${vector[1]}\\.front\\(\\)`).test(code)) return String([...values].sort((a, b) => a - b)[0]);
    const countMatch = code.match(/count\([^,]+,[^,]+,\s*(-?\d+)\)/);
    if (countMatch) return String(values.filter((value) => value === Number(countMatch[1])).length);
    const transformFactor = code.match(/return\s+x\s*\*\s*(-?\d+)/)?.[1];
    const index = code.match(new RegExp(`${vector[1]}\\[(\\d+)\\]`))?.[1];
    if (transformFactor && index) return String(values[Number(index)] * Number(transformFactor));
  }

  const unique = code.match(/make_unique<int>\((-?\d+)\)/);
  if (unique && /cout\s*<<\s*\*\w+/.test(code)) return unique[1];

  const structName = code.match(/Beacon\s+\w+\s*\{\s*"([^"]+)"\s*\}/)?.[1];
  const structSuffix = code.match(/return\s+name\s*\+\s*"([^"]+)"/)?.[1];
  if (structName && structSuffix) return `${structName}${structSuffix}`;

  const maxSignal = code.match(/maxSignal\((-?\d+)\s*,\s*(-?\d+)\)/);
  if (maxSignal && /return\s+a\s*>\s*b\s*\?\s*a\s*:\s*b/.test(code)) return String(Math.max(Number(maxSignal[1]), Number(maxSignal[2])));

  const output: string[] = [];
  for (const match of code.matchAll(/cout\s*<<\s*([^;]+?)\s*<<\s*endl\s*;/g)) {
    const expression = match[1].trim();
    const literal = expression.match(/^"([^"]*)"$/)?.[1];
    if (literal !== undefined) { output.push(literal); continue; }
    if (expression in stringVars) { output.push(String(stringVars[expression])); continue; }
    if (expression in intVars) { output.push(String(intVars[expression])); continue; }
    if (/^-?\d+(?:\s*[+*/-]\s*-?\d+)*$/.test(expression)) {
      try { output.push(String(Function(`return (${expression})`)())); continue; } catch { /* noop */ }
    }
  }
  return output.length ? output.join('\n') : null;
}

export function simulateCompiledLanguage(code: string, language: LanguageId): { ok: boolean; output: string; approximate: true } {
  const missingMain = language === 'java'
    ? !/public\s+static\s+void\s+main\s*\(/.test(code)
    : !/int\s+main\s*\(/.test(code);

  if (missingMain) {
    return { ok: false, output: language === 'java' ? 'Не найден метод public static void main(...).' : 'Не найдена функция int main(...).', approximate: true };
  }

  const output = language === 'java' ? javaHeuristics(code) : cppHeuristics(code);
  return {
    ok: true,
    output: output ?? 'Статический анализ завершён: структура программы выглядит допустимой, но вывод не удалось надёжно вывести из исходного кода.',
    approximate: true
  };
}
