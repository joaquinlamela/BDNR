import cassandra from 'cassandra-driver'
import { getWideColumnDbConfig } from './environment'

wideColumnDb = getWideColumnDbConfig()

exports.wideColumnDbClient = new cassandra.Client({
  contactPoints: [wideColumnDb.host],
});

