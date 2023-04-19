import { ConfigIcon } from '@/assets/icons/ConfigIcon';
import { LikeIcon } from '@/assets/icons/LikeIcon';
import { PencilIcon } from '@/assets/icons/PencilIcon';

export const MyPage = () => {
  return (
    <div className="w-96">
      <section className="mt-9 flex flex-col justify-center items-center">
        <div className=" h-28 w-28 rounded-full border border-gray-3">
          <svg
            width="113"
            height="112"
            viewBox="0 0 105 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="19.5"
              cy="19.2254"
              rx="19.5"
              ry="19.2254"
              transform="matrix(-1 0 0 1 72.5947 22.1831)"
              fill="#D1D1D1"
            ></ellipse>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M90.0001 88.5303C81.5057 76.1592 67.1383 68.0281 50.8447 68.0281C34.959 68.0281 20.9044 75.7571 12.3383 87.609C21.9551 98.2781 35.9786 105 51.5945 105C66.756 105 80.4165 98.6636 90.0001 88.5303Z"
              fill="#D1D1D1"
            ></path>
          </svg>
        </div>
        <div className="brand mt-5 text-center">샌디에이고</div>
      </section>
      <section className="w-full flex flex-col mt-6">
        <div className="cursor-pointer flex justify-end items-center">
          <div>프로필 수정하기 </div>
          <PencilIcon />
        </div>
        <div className="receipt text-end mt-1">
          개인 정보 수정은 한 달에 한 번만 가능합니다.
        </div>
        <ul className="mt-14">
          <li className="cursor-pointer flex gap-2 items-center">
            <ConfigIcon />
            <div>개인정보 설정</div>
          </li>
          <li className="cursor-pointer flex gap-2 items-center mt-12">
            <LikeIcon width="20" height="20" />
            <div>나의 찜목록</div>
          </li>
          <li className="cursor-pointer flex gap-2 items-center mt-12">
            <PencilIcon />
            <div>나의 시향지 기록</div>
          </li>
        </ul>
      </section>
    </div>
  );
};
