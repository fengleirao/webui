import { IdmapName } from 'app/enums/idmap-name.enum';

export interface Idmap {
  certificate: unknown;
  dns_domain_name: unknown;
  id: number;
  idmap_backend: string;
  name: IdmapName;
  options: Record<string, string>;
  range_high: number;
  range_low: number;
}