import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/AppShell';
import { HomePage } from '../pages/HomePage';
import { LessonPage } from '../pages/LessonPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProgressPage } from '../pages/ProgressPage';
import { TrackPage } from '../pages/TrackPage';
import { TracksPage } from '../pages/TracksPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="tracks" element={<TracksPage />} />
          <Route path="track/:trackId" element={<TrackPage />} />
          <Route path="lesson/:lessonId" element={<LessonPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
