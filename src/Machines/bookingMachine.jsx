import { assign, createMachine } from "xstate";

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: "",
    },
    states: {
      initial: {
        entry: assign({
          passengers: [],
          selectedCountry: "",
        }),
        on: {
          START: {
            target: "search",
          },
        },
      },
      search: {
        on: {
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: (context, event) => event.selectedCountry,
            }),
          },
          CANCEL: "initial",
        },
      },
      tickets: {
        on: {
          FINISH: "initial",
        },
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
            cond: "moreThanOnePassenger",
          },
          CANCEL: {
            target: "initial",
            actions: assign({
              passengers: [],
              selectedCountry: "",
            }),
          },
          ADD: {
            target: "passengers",
            actions: assign((context, event) => ({
              passengers: [...context.passengers, event.newPassenger],
            })),
          },
        },
      },
    },
  },
  {
    guards: {
      moreThanOnePassenger: (context) => {
        return context.passengers.length >= 1;
      },
    },
  }
);


export default bookingMachine;