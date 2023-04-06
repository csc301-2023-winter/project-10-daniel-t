import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Index from './index'; // replace with the name of your component


describe('Search', () => {
    test('displays the correct results containing the search term', () => {
    // render the index page adnd get search input and search button to be used later
      const { getByText, getByPlaceholderText, queryAllByTestId } = render(<Router><Index /></Router>);
      const searchInput = getByPlaceholderText('Enter a search term');
      const searchButton = getByText('Search');
    //change the search term and simulate click on searach button
      fireEvent.change(searchInput, { target: { value: 'machine learning' } });
      fireEvent.click(searchButton);
    //get all projects in the searchresult page
      const projects = queryAllByTestId('project');
    //for each project, check if the search term is contained
      projects.forEach((project) => {
      expect(project).toHaveTextContent('machine learning');
      });
    });
  });


describe('Search with year', () => {
test('displays only the results for the selected year', () => {
    // render the index page adnd get search input and search button to be used later
    const { getByPlaceholderText, getByText, queryAllByTestId } = render(<Router><Index /></Router>);

    // Select a year filter
    const yearFilter = getByPlaceholderText('Search year');
    fireEvent.change(yearFilter, { target: { value: '2019-20' } });

    // Click the search button
    const searchButton = getByText('Search');
    fireEvent.click(searchButton);

    //get all projects in the searchresult page
    const projects = queryAllByTestId('project');
    //for each project, check if the year is contained
    projects.forEach((project) => {
    expect(project).toHaveTextContent('2019-20');
    });
});
});


describe('Search with Organization', () => {
test('displays only the results for the selected organization', () => {
    // render the index page adnd get search input and search button to be used later
    const { getByPlaceholderText, getByText, queryAllByTestId } = render(<Router><Index /></Router>);

    // Select an organization filter
    const orgFilter = getByPlaceholderText('Search organization');
    fireEvent.change(orgFilter, { target: { value: 'AMD' } });

    // Click the search button
    const searchButton = getByText('Search');
    fireEvent.click(searchButton);

    //get all projects in the searchresult page
    const projects = queryAllByTestId('project');
    //for each project, check if the organization is contained
    projects.forEach((project) => {
    expect(project).toHaveTextContent('AMD');
    });
});
});


describe('Search with Supervisor', () => {
    test('displays only the results for the selected supervisor', () => {
        // render the index page adnd get search input and search button to be used later
        const { getByPlaceholderText, getByText, queryAllByTestId } = render(<Router><Index /></Router>);
    
        // Select a supervisor filter
        const supFilter = getByPlaceholderText('Search supervisor');
        fireEvent.change(supFilter, { target: { value: 'Alan Moses' } });
    
        // Click the search button
        const searchButton = getByText('Search');
        fireEvent.click(searchButton);
    
        //get all projects in the searchresult page
        const projects = queryAllByTestId('project');
        //for each project, check if the organization is contained
        projects.forEach((project) => {
        expect(project).toHaveTextContent('Alan Moses');
        });
    });
    });