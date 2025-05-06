'use client';
import Link from '@mui/material/Link';
import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';

interface HeaderNavItemProps {
  href: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  position: 'relative',
  padding: '0.5rem 0',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    '&::after': {
      width: '100%',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: '2px',
    backgroundColor: theme.palette.primary.dark,
    transition: 'width 0.3s ease-in-out',
  },
}));

export default function HeaderNavItem({ children, href }: PropsWithChildren<HeaderNavItemProps>) {
  return (
    <StyledLink href={href}>
      {children}
    </StyledLink>
  );
}