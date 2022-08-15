function Pagination({next, prev}) {
  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Pagination
