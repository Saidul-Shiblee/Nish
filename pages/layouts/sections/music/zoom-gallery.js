import React, { Fragment, useEffect } from 'react';

import Portfolio from '../../../../containers/portfolio/basic'

const ZoomGallery = ({gallery ,loading}) => {
    useEffect(() => {
        document.body.style.setProperty('--primary', '#000')
        document.body.style.setProperty('--secondary', '#000')
        document.body.style.setProperty('--light', '#252525')
        document.body.style.setProperty('--dark', '#000')
    })
    return (
      <Fragment>
        <Portfolio
          gallery={gallery}
          loading={loading}
          className="col-lg-3 col-md-4 col-sm-6 col-xs-7 isotopeSelector"
        />
      </Fragment>
    );
}
export default ZoomGallery;