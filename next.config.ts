// import type { NextConfig } from "next";

// /**
//  * 部署到 GitHub Pages 請用 `next build --webpack`（見 package.json）。
//  * 預設 Turbopack 產生的 chunk 檔名含 `~`，部分環境對該字元路徑處理異常，會導致客戶端 JS 無法載入。
//  *
//  * `patches/next+16.2.2.patch`：Next 的 getAssetPrefix() 依賴 document.currentScript，
//  * 在 async 腳本下常為 null 並拋錯，導致 React 無法 hydrate。patch 改為優先從
//  * link[stylesheet][href*="/_next/"] 推導前綴（靜態頁必有 CSS 連結）。
//  *
//  * GitHub 專案頁網址為 https://<帳號>.github.io/<倉庫名>/
//  * 此值必須與「倉庫名稱」完全一致（含大小寫）。
//  * 若部署在 username.github.io 主站（倉庫名 = 帳號.github.io），請改為 "" 並刪掉 basePath/assetPrefix。
//  *
//  * 自訂網域掛在網站根（例如 https://magmanet.my/）時必須為 ""，否則資源會請求
//  * /my-website/_next/... 而實際檔案在 /_next/...，導致無 CSS/JS。
//  * 若仍要部署到 github.io/<倉庫名> 子路徑，建置時設定：NEXT_BASE_PATH=/倉庫名
//  */
// const basePath = process.env.NEXT_BASE_PATH ?? "";

// const nextConfig: NextConfig = {
//   output: "export",
//   ...(basePath
//     ? { basePath, assetPrefix: `${basePath}/` }
//     : {}),
//   trailingSlash: true,
//   images: {
//     unoptimized: true, // 靜態匯出 / GitHub Pages 需要
//   },
//   env: {
//     NEXT_PUBLIC_BASE_PATH: basePath,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
