/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {
  /**
   * show loading status
   */
  loading?: boolean;
  /**
   * display error message
   */
  showError?: boolean;
  /**
   * data security, extended fields are encrypted using the specified algorithm
   */
  security?: Record<string, 'md5' | 'sha1' | 'aes' | 'des'>;
  /**
   * indicates whether Authorization credentials are required for the request
   * @default true
   */
  withAuthorization?: boolean;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
  /** only in axios interceptor config*/
  loading: boolean;
  showError: boolean;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = {
    loading: serviceOptions.loading,
    showError: serviceOptions.showError,
    ...options,
    method,
    url
  };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class PersonalInfoService {
  /**
   *
   */
  static getPersonalInfo(
    params: {
      /**  */
      email: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonalInfoResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personal-info/{email}';
      url = url.replace('{email}', params['email'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static registerNewPersonalInfo(
    params: {
      /**  */
      body?: PersonalInfoRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonalInfoResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/personal-info';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export interface AddOn {
  /**  */
  name?: string;

  /**  */
  description?: string;

  /**  */
  monthlyPrice?: number;

  /**  */
  yearlyPrice?: number;
}

export interface PersonalInfoRequest {
  /**  */
  name?: string;

  /**  */
  email?: string;

  /**  */
  phone?: string;

  /**  */
  addOns?: AddOn[];

  /**  */
  plan?: Plan;
}

export interface PersonalInfoResponse {
  /**  */
  name?: string;

  /**  */
  email?: string;

  /**  */
  phone?: string;

  /**  */
  addOns?: AddOn[];

  /**  */
  plan?: Plan;
}

export interface Plan {
  /**  */
  name?: string;

  /**  */
  monthlyPrice?: number;

  /**  */
  yearlyPrice?: number;

  /**  */
  img?: string;
}
