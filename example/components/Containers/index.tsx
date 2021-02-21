import * as React from 'react';
import { card, Card } from '../../../.';
import { Grid } from '../Grid';

export function Containers() {
  return (
    <Grid>
      <Card>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</p>
      </Card>
      <Card>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</p>
      </Card>
      <Card>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</p>
      </Card>
      <div className={card()}>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</p>
      </div>
      <div className={card()}>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</p>
      </div>
      <div className={card()}>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</p>
      </div>
    </Grid>
  );
}
