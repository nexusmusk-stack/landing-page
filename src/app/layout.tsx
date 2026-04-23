import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, a top-level layout is required.
// This layout should be as minimal as possible and only render the children.
export default function RootLayout({children}: Props) {
  return children;
}
