import { pdf, type DocumentProps } from "@react-pdf/renderer";
import type { ReactElement } from "react";

export async function renderPdfBuffer(
  document: ReactElement<DocumentProps>,
): Promise<Buffer> {
  const blob = await pdf(document).toBlob();
  const arrayBuffer = await blob.arrayBuffer();

  return Buffer.from(arrayBuffer);
}

