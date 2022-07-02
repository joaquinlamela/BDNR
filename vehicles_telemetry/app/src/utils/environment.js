export function getWideColumnDbConfig() {
    return {
        host: process.env.WIDE_COLUMN_DB_HOST,
        keyspace: process.env.WIDE_COLUMN_DB_KEYSPACE,
        localDataCenter: process.env.WIDE_COLUMN_DB_LOCAL_DATA_CENTER,
        databaseName: process.env.WIDE_COLUMN_DB_NAME,
    }
}

export function getPort(){
    return process.env.PORT
}
