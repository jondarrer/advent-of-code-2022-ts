const next = jest.fn();

export default jest.fn().mockImplementation(() => {
  return { next };
});

export { next };
