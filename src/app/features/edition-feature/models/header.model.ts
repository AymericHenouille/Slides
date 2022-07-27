export interface Header {
  header: string;
  subHeaders: SubHeader[];
}

export interface SubHeader {
  icon: string;
  text: string;
  action: () => void;
}
