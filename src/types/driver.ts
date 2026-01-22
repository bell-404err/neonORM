export interface DBDriver {
  connect(): Promise<void>;
  query(sql: string, params?: any[]): Promise<any>;
  disconnect(): Promise<void>;
}