type ExternalLinkProps = React.ComponentProps<"a">;

/** Anchor that opens in a new tab with safe `rel` defaults. */
export default function ExternalLink(props: ExternalLinkProps) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
