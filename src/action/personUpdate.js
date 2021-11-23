export const PERSON_UPDATE = "PERSON_UPDATE"

export const personUpdate = (action,person) => {
  return { type: PERSON_UPDATE, payload: { action, person } };
};