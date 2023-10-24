// import { Experimental_CssVarsProvider } from '@mui/material';
import React from "react";

import {Page} from './index.js';

import "@testing-library/jest-dom";
// import { fireEvent, render, screen } from "@testing-library/react";
// import { describe, it } from 'node:test';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

describe("Projects", () => {

    it("render projects", () => {

        let page = render(<Page />)
        //render(<Page/>);
        // const component = renderer("<Page/>")

        // let tree = component.toJSON();
        // console.log("tree",tree),

        // expect(screen.getByTestId("projectCard")).toBeInTheDocument();

        

    });


});