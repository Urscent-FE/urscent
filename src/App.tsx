import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccountPageLayout } from '@/layouts/AccountPageLayout';
import { LoginPage } from '@/pages/account/LoginPage';
import { SignupPage } from '@/pages/account/SignupPage';
import { FoundAccountPage } from '@/pages/account/FoundAccountPage';
import { MyPage } from '@/pages/MyPage';
import { MainPageLayout } from '@/layouts/MainPageLayout';
import { MainPage } from '@/pages/MainPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<AccountPageLayout />}>
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/sign-up" element={<SignupPage />} />
          <Route path="/account/pwfound" element={<FoundAccountPage />} />
        </Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/" element={<MainPageLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
