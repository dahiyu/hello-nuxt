// axios-moduleのリクエストをフックし、リクエスト前にトークンをHTTPリクエストに付与する
export default function( {$axios} ) {
  $axios.onRequest((config) => {
    console.log('on request')
    if (process.env.QIITA_TOKEN) {
      config.headers.common['Authorization'] = `Bearer ${process.env.QIITA_TOKEN}`
    }
    return config
  })
}
