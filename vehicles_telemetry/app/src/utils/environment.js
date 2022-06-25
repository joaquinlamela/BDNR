export function getWideColumnDbConfig() {
    return {
        host: process.env.WIDE_COLUMN_DB_HOST,
    }
}

export function getPort(){
    return process.env.PORT
}
