import { useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const PostEditor = ({ postContent, onChangePostContents }) => {
  const QuillRef = useRef();

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
        value={postContent}
        onChange={(value) => {
          window.scrollTo(0, document.body.scrollHeight);
          onChangePostContents(value);
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
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 30px;
  min-height: 40vh;

  * {
    border: 0 !important;
  }

  .ql-editor {
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
