import { Helmet } from "react-helmet";

type Props = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export default function HelmetWrapper({ title, description, url, image }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}
