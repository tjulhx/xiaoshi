/**
 * 获取当天或指定日期下的周起始日
 * @param date 可指定某个日期,支持字符型日期、时间戳、日期型，如仅需改变周起始日传null即可
 * @param startDay 可指定周起始日，默认是星期一，例：[0-6]，0代表星期日
 * @returns 返回当天或指定日期下的周起始日的日期
 */
export declare function getWeekStartDate(date?: string | number | Date | null, startDay?: number): Date | null;
/**
 * 获取当天或指定日期下的周结束日
 * @param date 可指定某个日期,支持字符型日期、时间戳、日期型，如仅需改变周结束日传null即可
 * @param endDay 可指定周结束日，默认是星期日，例：[0-6]，0代表星期日
 * @returns 返回当天或指定日期下的周结束日的日期
 */
export declare function getWeekEndDate(date?: string | number | Date | null, endDay?: number): Date | null;
