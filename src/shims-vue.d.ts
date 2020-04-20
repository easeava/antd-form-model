declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

interface Form {
  [propName: string]: any;
}

interface Rules {
  [propName: string]: {
    [index: number]: {
      [propName: string]: any,
    };
  };
}
