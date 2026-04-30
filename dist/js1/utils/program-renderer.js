/**
 * Program Renderer Class
 * Handles all HTML generation for programs dynamically (Desktop + Mobile)
 * This converts JSON data into HTML
 */

class ProgramRenderer {
  
  /**
   * Generate main tab button (Law, Computer Applications, etc.) - DESKTOP
   */
  static generateMainTabButton(dept, deptKey, isActive = false) {
    return `
      <li class="nav-item" role="presentation">
        <button 
          class="nav-link text-uppercase w-100 ${isActive ? 'active' : ''}" 
          id="pills-${deptKey}-tab" 
          data-bs-toggle="pill"
          data-bs-target="#pills-${deptKey}" 
          type="button" 
          role="tab" 
          aria-controls="pills-${deptKey}"
          aria-selected="${isActive}">
          ${dept.name}
        </button>
      </li>
    `;
  }

  /**
   * Generate program card button (BCA, LLB, etc.) - DESKTOP
   */
  static generateProgramCard(program, dept, deptKey, level) {
  const programKey = `${deptKey}Tab${program.id}`;
  const isHidden = (level !== 'ug') ? 'd-none' : ''; // Only show UG by default
  
  return `
    <li class="col-lg-3 p-3 nav-item d-grid program-item ${isHidden}" 
        data-level="${level}" 
        role="presentation">
      <button 
        class="nav-link p-4 border d-flex align-items-center text-start rounded"
        id="pills-${programKey}-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-${programKey}Content"
        type="button"
        role="tab"
        aria-selected="false">
        <span>${program.title}</span>
      </button>
    </li>
  `;
}

  /**
   * Generate accordion item for eligibility and duration - DESKTOP
   */
  static generateAccordionItem(program, deptKey, itemIndex, type) {
    const programKey = `${deptKey}Tab${program.id}`;
    const collapseId = `collapse${itemIndex}${programKey}`;
    const headingId = `heading${itemIndex}${programKey}`;
    const isCollapsed = itemIndex !== 0;
    
    let content = '';
    let buttonText = '';
    
    if (type === 'eligibility') {
      buttonText = 'Eligibility';
      content = program.eligibility.map(item => `<li>${item}</li>`).join('');
    } else if (type === 'duration') {
      buttonText = 'Duration';
      content = `<li>${program.duration}</li>`;
    }

    return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="${headingId}">
          <button 
            class="desktop-accordian accordion-button ${isCollapsed ? 'collapsed' : ''}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${collapseId}"
            aria-expanded="${!isCollapsed}"
            aria-controls="${collapseId}">
            ${buttonText}
          </button>
        </h2>
        <div 
          id="${collapseId}"
          class="accordion-collapse collapse ${!isCollapsed ? 'show' : ''}"
          data-bs-parent="#accordion${programKey}">
          <div class="accordion-body">
            <ul class="mb-0">${content}</ul>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Generate complete program content tab - DESKTOP
   */
  static generateProgramContent(program, dept, deptKey, level) {
    const programKey = `${deptKey}Tab${program.id}`;
    const isFirstUG = level === 'ug';
    const uniqueOverviewId = `overview-text-${programKey}`;
    
    return `
      <div 
        class="tab-pane fade ${isFirstUG ? 'show active' : ''}"
        id="pills-${programKey}Content" 
        data-level="${level}" 
        role="tabpanel">
        
        <div class="row my-4 px-3">
          <h4 class="py-2 bg-red text-center text-white mb-0">
            ${dept.school}
          </h4>
        </div>

        <div class="row py-5 px-4 mt-4 border shadow rounded">
          <div class="col-lg-6">
            <img 
              src="img/${program.image}" 
              class="program-img" 
              loading="lazy" 
              alt="${program.title}">
          </div>

          <div class="col-lg-6">
            <h3>${program.title}</h3>

            <!-- OVERVIEW -->
            <div class="overview-wrapper">
              <div 
                class="overview-text mb-2 collapsed"
                id="${uniqueOverviewId}"
                style="max-height:130px; overflow:hidden;">
                <p>${program.description}</p>
              </div>
              <button 
                class="btn btn-link p-0 overview-toggle"
                type="button"
                data-target="${uniqueOverviewId}">
                Read More
              </button>
            </div>

            <!-- ACCORDION -->
            <div class="accordion programAccordians pt-3" id="accordion${programKey}">
              ${this.generateAccordionItem(program, deptKey, 0, 'eligibility')}
              ${this.generateAccordionItem(program, deptKey, 1, 'duration')}
            </div>

            <div class="pt-3 d-none">
              <a 
                href="" 
                class="btn c_btn01"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Generate complete department section with all programs - DESKTOP
   */
  static generateDepartmentSection(dept, deptKey, isActive = false) {
  // Dynamically detect available levels
  const availableLevels = [];
  if (dept.programs.ug && dept.programs.ug.length > 0) {
    availableLevels.push({ key: 'ug', label: 'Undergraduate' });
  }
  if (dept.programs.pg && dept.programs.pg.length > 0) {
    availableLevels.push({ key: 'pg', label: 'Postgraduate' });
  }
  if (dept.programs.diploma && dept.programs.diploma.length > 0) {
    availableLevels.push({ key: 'diploma', label: 'Diploma' });
  }
  if (dept.programs.integrated && dept.programs.integrated.length > 0) {
    availableLevels.push({ key: 'integrated', label: 'Integrated' });
  }

  // Generate program cards for each level
  let allCards = '';
  let allContent = '';
  
  availableLevels.forEach(level => {
    const cards = (dept.programs[level.key] || []).map(prog => 
      this.generateProgramCard(prog, dept, deptKey, level.key)
    ).join('');
    
    const content = (dept.programs[level.key] || []).map(prog => 
      this.generateProgramContent(prog, dept, deptKey, level.key)
    ).join('');
    
    allCards += cards;
    allContent += content;
  });

  // Generate dynamic level buttons
  const levelButtons = availableLevels.map((level, index) => `
    <div class="col">
      <button 
        class="btn c_btn01 ${index === 0 ? 'active' : ''} w-100 py-3 level-btn rounded-3" 
        data-level="${level.key}"
        type="button">
        ${level.label}
      </button>
    </div>
  `).join('');

  return `
    <div class="tab-pane fade ${isActive ? 'show active' : ''}" id="pills-${deptKey}" role="tabpanel">
      <div class="programsChild">
        
        <!-- Dynamic Level Buttons -->
        <div class="row my-4">
          ${levelButtons}
        </div>

        <!-- Program Cards -->
        <ul class="nav d-flex nav-pills" role="tablist">
          ${allCards}
        </ul>

        <!-- Program Content -->
        <div class="tab-content">
          ${allContent}
        </div>

      </div>
    </div>
  `;
}
  /**
   * Generate mobile program card - MOBILE
   */
  static generateMobileProgramCard(program, deptKey) {
    const programKey = `${deptKey}Tab${program.id}`;
    
    return `
      <div class="accordion-item border mb-3 rounded">
        <h2 class="accordion-header" id="heading-${programKey}">
          <button 
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-${programKey}">
           
            ${program.title}
          </button>
        </h2>

        <div id="collapse-${programKey}"
          class="accordion-collapse collapse"
          data-bs-parent="#accordion-${deptKey}">

          <div class="accordion-body">
            

            <h5>Overview</h5>
            <div class="overview-wrapper">
              <div class="overview-text mb-2 collapsed"
                id="overview-text-${programKey}-overview"
                style="max-height:130px; overflow:hidden;">
                <p>${program.description}</p>
              </div>
              <button class="btn btn-link mb-3 p-0 overview-toggle"
                data-target="overview-text-${programKey}-overview">
                Read More
              </button>
            </div>

            <h5 class="mt-3">Eligibility</h5>
            <ul>${program.eligibility.map(item => `<li>${item}</li>`).join('')}</ul>

            <h5>Duration</h5>
            <ul><li>${program.duration}</li></ul>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Generate mobile UG/PG section - MOBILE
   */
  /**
 * Generate mobile UG/PG/Diploma/Integrated section - MOBILE
 */
static generateMobileLevelSection(programs, level, deptKey) {
  const levelLabels = { 
    ug: 'UG', 
    pg: 'PG', 
    diploma: 'Diploma', 
    integrated: 'Integrated' 
  };
  
  const levelLabel = levelLabels[level] || level.toUpperCase();
  const levelId = `${deptKey}-${level}`;
  
  const programCards = programs.map(prog => 
    this.generateMobileProgramCard(prog, `${deptKey}Tab${prog.id}`)
  ).join('');

  return `
    <div class="accordion-item mb-3 border rounded">
      <h2 class="accordion-header" id="heading-${levelId}">
        <button 
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-${levelId}">
          ${levelLabel}
        </button>
      </h2>

      <div id="collapse-${levelId}"
        class="accordion-collapse collapse"
        data-bs-parent="#accordion-${deptKey}">

        <div class="accordion-body px-1">
          <div class="accordion" id="accordion-${deptKey}-${level}">
            ${programCards}
          </div>
        </div>
      </div>
    </div>
  `;
}

  /**
   * Generate mobile department section - MOBILE
   */
  static generateMobileDepartmentSection(dept, deptKey) {
  const levelKeys = ['ug', 'pg', 'diploma', 'integrated'];
  const levelLabels = { ug: 'UG', pg: 'PG', diploma: 'Diploma', integrated: 'Integrated' };
  
  let levelSections = '';
  
  levelKeys.forEach(levelKey => {
    if (dept.programs[levelKey] && dept.programs[levelKey].length > 0) {
      levelSections += this.generateMobileLevelSection(
        dept.programs[levelKey].map(p => ({
          ...p,
          image: `${dept.icon}/${p.image}`,
          iconImage: `${dept.icon}/${p.iconImage}`
        })),
        levelKey,
        deptKey
      );
    }
  });

  return `
    <div class="accordion-item mb-3 border rounded">
      <h2 class="accordion-header" id="heading-${deptKey}">
        <button 
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-${deptKey}">
          <h5 class="mt-0 mb-0 text-red text-uppercase">
            ${dept.name}
          </h5>
        </button>
      </h2>

      <div id="collapse-${deptKey}"
        class="accordion-collapse collapse"
        data-bs-parent="#mainAccordion">

        <div class="accordion-body px-1 pb-0 border-none">
          <div class="accordion" id="accordion-${deptKey}">
            ${levelSections}
          </div>
        </div>
      </div>
    </div>
  `;
}
  /**
   * Render entire programs section - DESKTOP
   */
  static renderAllPrograms() {
    // Get the main tabs container and content container
    const mainTabsContainer = document.querySelector('#pills-tab');
    const contentContainer = document.querySelector('#pills-tabContent');
    
    if (!mainTabsContainer || !contentContainer) {
      console.error('Program containers not found');
      return;
    }

    // Generate main tab buttons
    const mainTabsHTML = Object.entries(programsData).map(([key, dept], index) => 
      this.generateMainTabButton(dept, key, index === 0)
    ).join('');
    
    // Generate all department sections
    const departmentSectionsHTML = Object.entries(programsData).map(([key, dept], index) => 
      this.generateDepartmentSection(dept, key, index === 0)
    ).join('');

    // Insert into containers
    mainTabsContainer.innerHTML = mainTabsHTML;
    contentContainer.innerHTML = departmentSectionsHTML;
  }

  /**
   * Render mobile programs section - MOBILE
   */
  static renderMobilePrograms() {
    // Get the mobile accordion container
    const mobileContainer = document.querySelector('#mainAccordion');
    
    if (!mobileContainer) {
      console.error('Mobile accordion container not found');
      return;
    }

    // Generate mobile department sections
    const mobileDepartmentSectionsHTML = Object.entries(programsData).map(([key, dept]) => 
      this.generateMobileDepartmentSection(dept, key)
    ).join('');

    // Insert into container
    mobileContainer.innerHTML = mobileDepartmentSectionsHTML;
  }

  /**
   * Render all programs (Desktop + Mobile)
   */
  static renderAllProgramsComplete() {
    this.renderAllPrograms();
    this.renderMobilePrograms();
  }
}