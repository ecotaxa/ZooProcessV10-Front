// import { Experimental_CssVarsProvider } from '@mui/material';
import React from "react";

import Page from '../src/pages/projects/index.js';

import "@testing-library/jest-dom";
// import { fireEvent, render, screen } from "@testing-library/react";
// import { describe, it } from 'node:test';
// import renderer from 'react-test-renderer';
import { getAllByTestId, render } from "@testing-library/react";

// import mockRouter from 'next-router-mock';


jest.mock('next/router', () => require('next-router-mock'));

let container = null;

describe("Projects", () => {

    beforeEach( ()=> {
        container = render(<Page />).container;
    });



    it("render projects", () => {

        // let page = render(<Page />)
        //render(<Page/>);
        // const component = renderer("<Page/>")

        // let tree = component.toJSON();
        // console.log("tree",tree),

        // expect(screen.getByTestId("projectCard")).toBeInTheDocument();

        const projectCard = getAllByTestId(container, 'projectCard');
        expect(projectCard.length).toEqual(1);

    });


    it('have new project button', () => {

        const newProjectBtn = getAllByTestId(container, 'newProjectBtn');
        expect(newProjectBtn.length).toEqual(1);
    
        //expect(route.newProjectBtn).
    
    });


    it('have title', () => {

        const title = getAllByTestId(container, 'title');
        expect(title.length).toEqual(1);
    });


});


// jest.mock('./components/notes-list', () => {
//     const NotesList = () => (
//       <div data-testid='note-list-component'>Hello World</div>
//     );
  
//     return NotesList;
//   });