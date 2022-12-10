import dynamic from 'next/dynamic';
import {Builder, withChildren, withBuilder} from '@builder.io/react';
// import FlowCardCustom from "./FlowCardCustom";
// import {TypographyAlign, typographyBreakPoints, TypographyTypes} from "../constants/typography";

import Row from './CustomRow';
import Column from './Column';

import RowWrap from './CustomRow';
import ColumnWrap from './Column';

import Typography from './Typography';
import Center from './Center';
import Image from '@bit/bolttech.components.ui.image';
import {TypographyAlign, typographyBreakPoints, TypographyTypes} from "../constants/typography";
import FlowCardCustom from "./FlowCardCustom";

export const registerComponents = () => {
  Builder.registerComponent(withChildren(Center), {
    name: 'Center',
    inputs: [
      { name: 'className', type: 'string' }
    ]
  });

  Builder.registerComponent(withChildren(Row), {
    name: 'Row',
    noWrap: true,
    inputs: [
      { name: 'fullWidth', type: 'boolean' },
      { name: 'className', type: 'string' }
    ],
  });

  Builder.registerComponent(withChildren(Row), {
    name: 'RowWrap',
    inputs: [
      { name: 'fullWidth', type: 'boolean' },
      { name: 'className', type: 'string' }
    ],
  });

  Builder.registerComponent(withChildren(Column), {
    name: 'Column',
    noWrap: true,
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Typography', options: { children: 'Hello world!', type: 'bodyL', element: 'h3' } }
      }
    ],
    inputs: [
      {
        name: 'size',
        type: 'object',
        defaultValue: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        subFields: [
          {
            name: 'xs',
            type: 'string',
            required: true
          },
          {
            name: 'sm',
            type: 'string',
            required: true
          },
          {
            name: 'md',
            type: 'string',
            required: true
          },
          {
            name: 'lg',
            type: 'string',
            required: true
          },
        ]
      }
    ]
  });

  Builder.registerComponent(withChildren(Column), {
    name: 'ColumnWrap',
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Typography', options: { children: 'Hello world!', type: 'bodyL', element: 'h3' } }
      }
    ],
    inputs: [
      {
        name: 'size',
        type: 'object',
        defaultValue: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
        subFields: [
          {
            name: 'xs',
            type: 'string',
            required: true
          },
          {
            name: 'sm',
            type: 'string',
            required: true
          },
          {
            name: 'md',
            type: 'string',
            required: true
          },
          {
            name: 'lg',
            type: 'string',
            required: true
          },
        ]
      }
    ]
  });

  Builder.registerComponent(withChildren(Typography), {
    name: 'Typography',
    inputs: [
      { name: 'children', type: 'longText', defaultValue: 'Typography' },
      { name: 'className', type: 'string' },
      { name: 'element', type: 'string', enum: TypographyTypes, defaultValue: 'h1' },
      { name: 'type', type: 'string', enum: typographyBreakPoints , defaultValue: 'displayL'},
      { name: 'align', type: 'string', enum: TypographyAlign, defaultValue: "center" }
    ]
  });
  Builder.registerComponent(Image, {
    name: 'Lazyload Image',
    inputs: [
      { name: 'src', defaultValue: 'https://picsum.photos/300/200', type: 'string' },
      { name: 'alt', defaultValue: 'Hello World', type: 'string' },
      {
        name: 'sizes',
        type: 'object',
        defaultValue: {
          XS: { width: '100%', height: '100%' },
          SM: { width: '100%', height: '100%' },
          MD: { width: '100%', height: '100%' },
          LG: { width: '100%', height: '100%' }
        },
        subFields: [
          {
            name: 'XS',
            type: 'object',
            required: true,
            subFields: [
              {
                name: 'width',
                type: 'string',
              },
              {
                name: 'height',
                type: 'string'
              }
            ]
          },
          {
            name: 'SM',
            type: 'object',
            required: true,
            subFields: [
              {
                name: 'width',
                type: 'string'
              },
              {
                name: 'height',
                type: 'string'
              }
            ]
          },
          {
            name: 'MD',
            type: 'object',
            required: true,
            subFields: [
              {
                name: 'width',
                type: 'string'
              },
              {
                name: 'height',
                type: 'string'
              }
            ]
          },
          {
            name: 'LG',
            type: 'object',
            required: true,
            subFields: [
              {
                name: 'width',
                type: 'string'
              },
              {
                name: 'height',
                type: 'string'
              }
            ]
          },
        ]
      }
    ]
  });

  Builder.registerComponent(FlowCardCustom, {
    name: 'Flow Card',
    inputs: [
      { name: 'title', type: 'string' },
      { name: 'subtitle', type: 'string' },
      { name: 'icon', type: 'string' },
      { name: 'url', type: 'string' },
    ]
  });

  Builder.register('insertMenu', {
    name: 'bolttech components',
    items: [
      { name: 'Center' },
      { name: 'Lazyload Image' },
      { name: 'Row' },
      { name: 'Column' },
      { name: 'Typography' },
      { name: 'Flow Card' },
    ]
  });
  // Builder.register('editor.settings', { customInsertMenu: true });
}
