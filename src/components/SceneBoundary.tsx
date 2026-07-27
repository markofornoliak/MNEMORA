import { Component, type ErrorInfo, type ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';

interface SceneBoundaryProps {
  children: ReactNode;
  onFallback: () => void;
}

interface SceneBoundaryState { failed: boolean }

export class SceneBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { failed: false };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('MNEMORA 3D scene failed', error, info);
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="grid min-h-[540px] place-items-center p-8 text-center">
          <div className="max-w-md">
            <TriangleAlert className="mx-auto text-amber-200" />
            <h3 className="mt-4 font-display text-2xl text-white">3D-контур недоступен</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">Сцена не смогла инициализироваться на этом устройстве. Учебные функции и навигация доступны в 2D-режиме.</p>
            <button type="button" onClick={this.props.onFallback} className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Открыть 2D-карту</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
