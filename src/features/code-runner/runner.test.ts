import { describe, expect, it } from 'vitest';
import { validateTask } from './runner';
import { simulateCompiledLanguage } from './simulatedRunner';

describe('task validation', () => {
  it('normalizes exact output', () => {
    expect(validateTask('', 'hello  \nworld', { kind: 'exact-output', expected: 'hello\nworld' })).toBe(true);
  });

  it('rejects empty contains-output validators', () => {
    expect(validateTask('', 'anything', { kind: 'contains-output', expected: '' })).toBe(false);
  });

  it('handles invalid code patterns without throwing', () => {
    expect(validateTask('const x = 1;', '', { kind: 'code-pattern', patterns: ['['] })).toBe(false);
  });

  it('checks HTML patterns case-insensitively', () => {
    expect(validateTask('<MAIN><h1>Code</h1></MAIN>', '', { kind: 'html-contains', patterns: ['<main', '<h1'] })).toBe(true);
  });
});

describe('compiled-language simulation', () => {
  it('extracts a Java println string', () => {
    const result = simulateCompiledLanguage('public class Main { public static void main(String[] args) { System.out.println("ready"); } }', 'java');
    expect(result.ok).toBe(true);
    expect(result.output).toContain('ready');
    expect(result.approximate).toBe(true);
  });

  it('rejects C++ without main', () => {
    expect(simulateCompiledLanguage('cout << "hello";', 'cpp').ok).toBe(false);
  });
});
