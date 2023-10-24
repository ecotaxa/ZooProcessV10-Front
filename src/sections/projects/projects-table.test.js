import { render, getAllByTestId, fireEvent } from "@testing-library/react"
import React from "react";
// import { ProjectList } from "./project_list";
// import routeTo from "../services/routeTo";
import { ProjectsTable } from "./projects-table";
import mockRouter from 'next-router-mock';



// jest.mock('@material-ui/data-grid', () => {
//     const original = jest.requireActual('@material-ui/data-grid');
//     return {
//       ...original,
//       AutoSizer: ({ children }: AutoSizerProps) => {
//         console.log('mocked AutoSizer');
//         return children({
//           height: 500,
//           width: 500,
//         });
//       },
//     };
//   });

jest.mock('next/router', () => require('next-router-mock'));

describe('test Project list', () => {

// let container = null;

// beforeEach( ()=> {

//     container = render(<ProjectList/>).container;

// });

it('show project list Grid', () => {

    mockRouter.push("/projects/");


    let container = render(<ProjectsTable/>).container;
    const projects = getAllByTestId(container, 'projectlist');
    expect(projects.length).toBeGreaterThan(0);

});


it('show list in project list Grid', () => {

    mockRouter.push("/projects/");

    const projectlist = [
        {id:1, name:'name 1'},
        {id:2, name:'name 2'},
        // {id:'3', name:'name 2'},
    ]

    // jest.spyOn(routeTo,'project').mockImplementation(()=>{ return projectlist[0].id})

    let container = render(<ProjectsTable projects={projectlist}/>).container;
    const projects = getAllByTestId(container, 'projectlist');
    expect(projects.length).toBeGreaterThan(0);

    // const buttons = getAllByTestId(container, 'action_btn');
    // expect(buttons.length).toBeGreaterThan(0);
    // expect(buttons.length).toEqual(2);

    // fireEvent.click(buttons[0])
    // buttons[0].click()
    // expect(routeTo.project).toHaveBeenCalled();
    // expect(routeTo.project).toReturnWith(1)
});




});
