// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 1. 公開先のディレクトリパスを指定（重要！）
  app: {
    // 例：https://example.com/260427_Nuxt/hoge/ に置く場合
    baseURL: '/260427_Nuxt/hoge/',
  },

  // 2. 完全な静的サイト（SSG）としてビルドするための設定
  ssr: true, // SEOのためにHTMLを生成したいのでtrueのまま
  nitro: {
    static: true, // 静的ホスティング（レンタルサーバー等）向けに最適化
  }
})
