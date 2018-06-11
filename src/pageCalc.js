import React from 'react'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'

export function Page(props) {
  let page = props.page
  let onSubmit = props.onSubmit
  let nextPage = props.nextpage
  let previousPage = props.previousPage
  return (
    <div className="page" >
      <div> PAGE -- {page} -- </div>
      {page === 1 && <WizardFormFirstPage onSubmit={nextPage} />}
      {page === 2 && (
        <WizardFormSecondPage
          previousPage={previousPage}
          onSubmit={nextPage}
        />
      )}
      {page === 3 && (
        <WizardFormThirdPage
          previousPage={previousPage}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}
