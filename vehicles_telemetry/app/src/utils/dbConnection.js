import cassandra from 'cassandra-driver'
import { getWideColumnDbConfig } from './environment'

const wideColumnDb = getWideColumnDbConfig()

export const wideColumnDbClient = new cassandra.Client({
  contactPoints: [wideColumnDb.host],
  localDataCenter: wideColumnDb.localDataCenter,
  keyspace: wideColumnDb.keyspace
});

