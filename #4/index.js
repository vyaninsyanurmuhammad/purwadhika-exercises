function convertDaysTOYMWD(days) {
    const year = Math.floor(days / 360);
    const remainDays = (days % 360);
    const month = Math.floor(remainDays / 30);
    const day = (remainDays % 30);
    const week = Math.floor(day / 7);
    const remainingDaysInWeek = (day % 7);

    const yearResult = `${year} tahun `
    const monthResult = `${month} bulan `
    const weekResult = `${week} minggu `
    const dayResult = `${remainingDaysInWeek} hari `

    console.log(`${yearResult}${monthResult}${weekResult}${dayResult}= ${days} hari`)
}

convertDaysTOYMWD(369)