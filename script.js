function toggleDropdown() {
      const projectList = document.getElementById('project-list');
      if (projectList.classList.contains('hidden')) {
          projectList.classList.remove('hidden');
      } else {
          projectList.classList.add('hidden');
      }
  }
  