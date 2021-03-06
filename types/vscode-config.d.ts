import Stock from "./stock";

export interface VscodeConfig {
  // 数据接口
  api: "netease" | "sina" | "tencent" | "xueqiu",

  // 轮询时间
  interval: number,

  // 收益颜色
  up_color: string,

  // 亏损颜色
  down_color: string,

  // 股票数据
  stocks: Stock[],

  // 上升百分比警告
  up_percent: 0.1,

  // 下跌百分比警告
  down_percent: -0.08,
}

export default VscodeConfig;
