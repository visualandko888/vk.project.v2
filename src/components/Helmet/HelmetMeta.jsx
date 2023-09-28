import { HelmetProvider } from 'react-helmet-async';

export default function HelmetMeta({ title, description }) {
  return (
    <HelmetProvider>
      <title>{title}</title>
      <meta name="description" content={description} />
    </HelmetProvider>
  );
}
