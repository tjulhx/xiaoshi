/**
 * 获取当天或指定日期下的周起始日
 * @param date 可指定某个日期,支持字符型日期、时间戳、日期型，如仅需改变周起始日传null即可
 * @param startDay 可指定周起始日，默认是星期一，例：[0-6]，0代表星期日
 * @returns 返回当天或指定日期下的周起始日的日期
 */
export function getWeekStartDate(date?:string|number|Date|null,startDay?:number):Date|null{
    try {
        let dateValue = new Date()
        let startDayValue = 1
        if(date){
            if(typeof date !== 'object'){
                dateValue = new Date(date)
            }else{
                dateValue = date
            }
        }
        if((startDay|| startDay === 0)){
            if(startDay>= 0 && startDay<= 6){
                startDayValue = startDay
            }else{
                return null
            }
        }
        for(let i = 0;i<7;i++){
            let nowDay = dateValue.getDay()
            if(nowDay === startDayValue){
                break
            }else{
                dateValue = new Date(dateValue.setDate(dateValue.getDate() - 1))
            }
        }
        return dateValue
    } catch (error) {
        return null
    }
}

/**
 * 获取当天或指定日期下的周结束日
 * @param date 可指定某个日期,支持字符型日期、时间戳、日期型，如仅需改变周结束日传null即可
 * @param endDay 可指定周结束日，默认是星期日，例：[0-6]，0代表星期日
 * @returns 返回当天或指定日期下的周结束日的日期
 */
export function getWeekEndDate(date?:string|number|Date|null,endDay?:number):Date|null{
    try {
        let dateValue = new Date()
        let endDayValue = 0
        if(date){
            if(typeof date !== 'object'){
                dateValue = new Date(date)
            }else{
                dateValue = date
            }
        }
        if((endDay|| endDay === 0)){
            if(endDay>= 0 && endDay<= 6){
                endDayValue = endDay
            }else{
                return null
            }
        }
        for(let i = 0;i<7;i++){
            let nowDay = dateValue.getDay()
            if(nowDay === endDayValue){
                break
            }else{
                dateValue = new Date(dateValue.setDate(dateValue.getDate() + 1))
            }
        }
        return dateValue
    } catch (error) {
        return null
    }
}