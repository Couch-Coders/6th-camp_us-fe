import { useRef, useState, useMemo } from 'react';
//이렇게 라이브러리를 불러와서 사용하면 됩니다
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const PostEditor = () => {
  const QuillRef = useRef();
  const [contents, setContents] = useState('');

  console.log(contents);

  console.log(QuillRef);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [],
      },
    }),
    [],
  );

  return (
    <>
      <ReactQuillContent
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={(value) => {
          window.scrollTo(0, document.body.scrollHeight);
          setContents(value);
        }}
        modules={modules}
        theme="snow"
        placeholder="당신의 이야기를 들려주세요!"
      />
    </>
  );
};
//이렇게 컴포넌트 사용하듯이 사용하면 됩니다.

export default PostEditor;

const ReactQuillContent = styled(ReactQuill)`
  * {
    border: 0 !important;
  }

  .ql-editor {
    height: 100%;
    font-size: 16px;
    padding: 20px 0;
  }

  .ql-toolbar {
    display: none;
  }

  button {
    &:hover {
      background-color: #e0e0e0 !important;
    }
  }

  .ql-editor.ql-blank::before {
    color: #bdbdbd;
    left: 0;
    right: 0;
    font-style: normal;
  }
`;
