import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccountPageLayout } from '@/layouts/AccountPageLayout';
import { LoginPage } from '@/pages/account/LoginPage';
import { SignupPage } from '@/pages/account/SignupPage';
import { FoundAccountPage } from '@/pages/account/FoundAccountPage';
import { MyPage } from '@/pages/MyPage';
import { GolbalLayout } from '@/layouts/GolbalLayout';
import { MainPageLayout } from '@/layouts/MainPageLayout';
import { PerfumeDetail } from '@/pages/PerfumeDetail';
import { MainPage } from '@/pages/MainPage';
import { SearchPage } from '@/pages/SearchPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<AccountPageLayout />}>
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/sign-up" element={<SignupPage />} />
          <Route path="/account/pwfound" element={<FoundAccountPage />} />
        </Route>
        <Route path="/" element={<GolbalLayout />}>
          <Route path="/" element={<MainPageLayout />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/mypage" element={<MyPage />} />
          <Route
            path="/perfumes/:brandName/:perfumeName"
            element={<PerfumeDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
