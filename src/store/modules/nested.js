const defaultState = {
  elements: [
    {
      id: 1,
      name: 'Job Families, Functions & Titles',
      children: [
        {
          name: 'Executive Management',
          children: [
            {
              name: 'Executive',
              children: [
                {
                  name: 'Chief Executive Officer',
                  size: 9,
                },
                {
                  name: 'Chief Programme Officer',
                  size: 9,
                },
                {
                  name: 'Chief Revenue Officer',
                  size: 9,
                },
                {
                  name: 'Chief Product Officer',
                  size: 9,
                },
                {
                  name: 'Chief Operations Officer',
                  size: 9,
                },
                {
                  name: 'Chief Finance Officer',
                  size: 9,
                },
              ],
            },
          ],
        },
        {
          name: 'Business Support',
          children: [
            {
              name: 'Office Support',
              children: [
                {
                  name: 'Senior Administrator',
                  size: 2,
                },
                {
                  name: 'Administrator',
                  size: 1,
                },
              ],
            },
            {
              name: 'Finance',
              children: [
                {
                  name: 'Head of Finance',
                  size: 7,
                },
                {
                  name: 'Financial Controller',
                  size: 6,
                },
                {
                  name: 'Commercial Accountant',
                  size: 3812,
                },
                {
                  name: 'Accounts Associate (Sales/Purchase/Credit Control)',
                  size: 1,
                },
              ],
            },
            {
              name: 'People',
              children: [
                {
                  name: 'Head of People',
                  size: 7,
                },
                {
                  name: 'People Manager',
                  size: 6,
                },
                {
                  name: 'People Operations Support',
                  size: 1,
                },
              ],
            },
            {
              name: 'Legal & Compliance',
              children: [
                {
                  name: 'General Counsel',
                  size: 7,
                },
                {
                  name: 'Legal Manager',
                  size: 6,
                },
                {
                  name: 'Legal Counsel',
                  size: 4,
                },
                {
                  name: 'Compliance Support',
                  size: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Job Families',
      children: [],
    },
  ],
};

const getters = {}

const mutations = {
  updateElements: (state, payload) => {
    state.elements = payload;
  },
};

const actions = {
  updateElements: ({ commit }, payload) => {
    commit('updateElements', payload);
  },
};

export default {
  namespaced: true,
  state: defaultState,
  actions,
  mutations,
  getters
};
