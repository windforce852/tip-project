import { Container, Box, Grid, List, ListItem, ListItemText, Button, styled } from '@mui/material';
import useDatasetList from '../Hooks/useDatasetList';
import DescriptionIcon from '@mui/icons-material/Description';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CsvUploader from './CsvUploader';

function DatasetPanel() {

  const { datasetList, loading, error } = useDatasetList();

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  
  if (loading) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' }}>
        <h2>Loading...</h2>;
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' }}>
        <h2>Error: </h2>;
        <p>{error}</p>
      </div>
    )
  }

  if (!datasetList ) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' }}>
        <h2>No data available.</h2>;
      </div>
    )
  }

  const { data } = datasetList;
  // console.log(`Dataset Panel - data: ${data}`)

  return (
    <>
      <div style={{ 
        background: '#212121', width: '100%', height: '200px', 
        borderRadius: '8px' , marginTop: '20px',
      }}>
        <h2 style={{paddingTop: '8px', paddingLeft: '8px', marginBlockEnd: 0}}>
          Datasets
        </h2>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: 0, margin: 0,
        }}>
          
          {/* TODO - UPLOAD */}
          <div style={{ paddingLeft: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>

            {/* <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button> */}

            <CsvUploader/>

          </div>


          <div style={{ paddingRight: '20px' }}>
            <ul style={{ maxHeight: 120, width: 250, overflow: 'auto', scrollbarColor: '#8a8a8a transparent', listStyleType: 'none'}}>
            {data.map((dataset) => {
              return(
                <li key={dataset.id}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <DescriptionIcon style={{paddingRight: '6px'}}/>
                    {dataset.datasetName}
                  </div>
                </li>  
              )
            })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DatasetPanel;