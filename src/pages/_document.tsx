import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)

      return initialProps
    }
}

export default MyDocument
