import { Diagnostic } from 'vscode-languageserver';

export default interface Analysis {
    version();
    analysis(): Diagnostic[];
}
