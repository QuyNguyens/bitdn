'use client';

import Image from 'next/image';
import Link from 'next/link';

const CompanyInfoCard = () => {
  return (
    <div className="w-full lg:w-4/5 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left image */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/companyInfo.png" // đổi path theo project
            alt="FPT Japan Holdings"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right content */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            <li>
              <span className="font-semibold">会社名：</span>
              BIT DNジャパンホールディングス株式会社
              <br />
              <span className="text-gray-600">(BITDN Japan Holdings Co., Ltd.)</span>
            </li>

            <li>
              <span className="font-semibold">代表者：</span>
              ド・ヴァン・カック (Do Van Khac)
            </li>

            <li>
              <span className="font-semibold">株主：</span>
              BITDNソフトウェア 100%出資
            </li>

            <li>
              <span className="font-semibold">資本金：</span>
              23億円（2025年6月13日 増資）
            </li>

            <li>
              <span className="font-semibold">設立：</span>
              2005年11月
            </li>

            <li>
              <span className="font-semibold">社員数：</span>
              連結5,000名（2026年1月現在）
              <span className="text-gray-500"> ※パートナー含む</span>
            </li>

            <li className="pt-2">
              <Link
                href="/files/company-profile.pdf"
                className="text-orange-600 hover:underline font-medium"
              >
                会社概要 ダウンロード
              </Link>
              <span className="text-gray-500">（2026年1月）</span>
            </li>

            <li>
              <Link href="/company/video" className="text-orange-600 hover:underline font-medium">
                会社紹介ビデオ こちら
              </Link>
              <span className="text-gray-500">（2025年5月）</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoCard;
