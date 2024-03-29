import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../directory/directory.selectors';
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item';

const directory = ({sections}) => (

       <div className="directory-menu">
    {  sections.map(({id, ...otherSectionProps}) => (
       <MenuItem key={id} {...otherSectionProps}
         />        
      ))}
        </div>
           );
     
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(directory);