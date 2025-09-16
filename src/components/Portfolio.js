import React from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

const PROJECTS = [
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png", category: "Flayers" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png", category: "Flayers" }
];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.filters = ["All", "Websites", "Flayers", "Business Cards"];

    this.projects = PROJECTS;

    this.state = {
      selectedFilter: "All"
    };

    this.handleSelectFilter = this.handleSelectFilter.bind(this);
  }

  handleSelectFilter(filter) {
    this.setState({ selectedFilter: filter });
  }

  getFilteredProjects() {
    const { selectedFilter } = this.state;
    if (selectedFilter === "All") {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === selectedFilter);
  }

  render() {
    const filteredProjects = this.getFilteredProjects();

    return (
      <section className="portfolio">
        <Toolbar
          filters={this.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />

        <ProjectList projects={filteredProjects} />
      </section>
    );
  }
}

export default Portfolio;
