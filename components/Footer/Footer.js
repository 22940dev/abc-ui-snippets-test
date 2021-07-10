import React from 'react';
import { styled } from 'stitches.config';
import Separator from 'components/Separator';
import Stack from 'components/Stack';
import LinkPreview from 'components/LinkPreview';

const Footer = () => {
  return (
    <footer>
      <Stack>
        <Separator />
        <Paragraph>
          Built by <LinkPreview url="https://twitter.com/emilkowalski_">Emil</LinkPreview> 🌕
        </Paragraph>
      </Stack>
    </footer>
  );
};

const Paragraph = styled('p', {
  fontSize: 14,
  color: '$gray',
  display: 'block',
  textAlign: 'center'
});

const Link = styled('a', {
  textDecoration: 'none',
  color: '$white',
  display: 'inline-block'
});

export default Footer;
