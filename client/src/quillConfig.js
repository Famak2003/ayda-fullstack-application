import Quill from 'quill';
import Table from 'quill-table';
import "react-quill/dist/quill.snow.css"

// Register the table module with Quill
Quill.register({
    'modules/table': Table,
});

export default Quill;
